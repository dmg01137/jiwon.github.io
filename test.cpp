#include <iostream>
#include <boost/beast.hpp>
#include <boost/asio.hpp>
#include <boost/asio/spawn.hpp>

namespace beast = boost::beast;
namespace http = beast::http;
namespace net = boost::asio;
using tcp = boost::asio::ip::tcp;

void handle_request(http::request<http::string_body>& req, tcp::socket& socket) {
    http::response<http::string_body> res;

    if (req.method() == http::verb::post && req.target() == "/login") {
        // 여기에 로그인 처리 로직을 추가할 수 있습니다.
        // 예를 들어, 사용자명과 비밀번호를 확인하고 성공 또는 실패에 따라 적절한 응답을 생성할 수 있습니다.

        // 임시로 성공 응답을 반환합니다.
        res.result(http::status::ok);
        res.set(http::field::content_type, "text/plain");
        res.body() = "로그인 성공!";
    } else {
        res.result(http::status::not_found);
        res.set(http::field::content_type, "text/plain");
        res.body() = "404 Not Found";
    }

    res.prepare_payload();
    http::write(socket, res);
}

void do_session(tcp::socket& socket, net::yield_context yield) {
    beast::error_code ec;

    // HTTP 요청을 읽습니다.
    beast::flat_buffer buffer;
    http::request<http::string_body> req;
    http::async_read(socket, buffer, req, yield[ec]);
    if (ec == http::error::end_of_stream) return;
    if (ec) {
        std::cerr << "읽기 오류: " << ec.message() << std::endl;
        return;
    }

    // 요청을 처리합니다.
    handle_request(req, socket);
}

int main() {
    try {
        net::io_context ioc(1);
        tcp::acceptor acceptor(ioc, {tcp::v4(), 8080});

        while (true) {
            tcp::socket socket(ioc);
            acceptor.accept(socket);

            net::spawn(ioc, [&socket](net::yield_context yield) {
                do_session(socket, yield);
            });
        }
    } catch (const std::exception& e) {
        std::cerr << "예외 발생: " << e.what() << std::endl;
        return EXIT_FAILURE;
    }

    return EXIT_SUCCESS;
}
