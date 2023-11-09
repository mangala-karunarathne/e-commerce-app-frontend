import { Button } from "react-bootstrap";

const RemoveFromCartComponent = ({
  removeFromCartHandler = false,
  price,
  quantity,
  productId,
  orderCreated,
}) => {
  return (
    <Button
      disabled={orderCreated}
      type="button"
      variant="secondary"
      onClick={
        removeFromCartHandler
          ? () => removeFromCartHandler(productId, quantity, price)
          : undefined
      }
    >
      <i className="bi bi-trash"></i>
    </Button>
  );
};

export default RemoveFromCartComponent;
