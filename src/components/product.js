function Product(props){
    const title=props.product.title;
    const price=props.product.price;

    return (
        <div class="col-md-4">
        <div class="card text-bg-warning text-center rounded-0">
          <div class="card-header fw-bold">{title}</div>
          <div class="card-body">nuo {price} EUR / mėn.</div>
        </div>
      </div>
    );

}
export default Product