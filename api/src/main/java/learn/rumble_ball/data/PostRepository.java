package learn.rumble_ball.data;

import learn.rumble_ball.models.Post;

import java.util.List;

public interface PostRepository {
    List<Post> findAll();

    List<Post> findByType(int typeId);

    List<Post> findByTypeId(int typeId);

    Post findById(int id);

}
