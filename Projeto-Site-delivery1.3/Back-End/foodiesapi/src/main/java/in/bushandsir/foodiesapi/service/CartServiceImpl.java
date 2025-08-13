package in.bushandsir.foodiesapi.service;


import in.bushandsir.foodiesapi.entity.CartEntity;
import in.bushandsir.foodiesapi.io.CartRequest;
import in.bushandsir.foodiesapi.io.CartResponse;
import in.bushandsir.foodiesapi.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService{

    private final CartRepository cartRepository;
    private final UserService userService;


    @Override
    public CartResponse addToCart(CartRequest request) {
     String loggedInUserId = userService.findByUserId();
     Optional<CartEntity> cartOptional = cartRepository.findByUserId(loggedInUserId);
     CartEntity cart = cartOptional.orElseGet(() -> new CartEntity(loggedInUserId, new HashMap<>()));
     Map< String , Integer> cartItems = cart.getItems();
    cartItems.put(request.getFoodId(), cartItems.getOrDefault(request.getFoodId(), 0) + 1);
        cart.setItems(cartItems);
      cart = cartRepository.save(cart);
      return converToResponse(cart);
    }

    @Override
    public CartResponse getCart() {
        String loggedInUserId = userService.findByUserId();
      CartEntity entity =  cartRepository.findByUserId(loggedInUserId)
                .orElse(new CartEntity(null,loggedInUserId, new HashMap<>()));
      return converToResponse(entity);
    }

    @Override
    public void clearCart() {
        String loggedInUserId = userService.findByUserId();
        cartRepository.deleteByUserId(loggedInUserId);
    }

    private CartResponse converToResponse(CartEntity cartEntity){
        return CartResponse.builder()
                .id(cartEntity.getId())
                .userId(cartEntity.getUserId())
                .items(cartEntity.getItems())
                .build();

    }
}
