package learn.rumble_ball.data;

import learn.rumble_ball.models.Post;

import java.util.List;

public interface PostRepository {
    List<Post> findAll();

    Post findById(int id);
}
