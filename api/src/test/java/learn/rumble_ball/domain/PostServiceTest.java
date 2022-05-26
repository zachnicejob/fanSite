package learn.rumble_ball.domain;

import learn.rumble_ball.data.PostRepository;
import learn.rumble_ball.models.Post;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class AgentServiceTest {

    @Autowired
    PostService service;

    @MockBean
    PostRepository repository;

    @Test
    void shouldFindHazel() {
    }
}
