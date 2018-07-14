class ProductListing extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      isLoading: true,
      isLoadingMore: false
    };
  }
  componentDidMount() {
    this.props.fetchProducts(this.state.page).then(() => {
      this.setState({
        page: this.state.page + 1,
        isLoading: false
      });
    });
  }
  loadMore(page) {
    this.props.fetchProducts(page);
    this.setState({
      page: this.state.page + 1,
      isLoadingMore: false
    });
  }

  render() {
    //console.log(this.props);
    const { products } = this.props;

    if (this.state.isLoading) {
      return null;
    }

    return (
      <Container text>
        <ProductCard products={products} />
        <br />
        <Button size="small" onClick={() => this.loadMore(this.state.page)}>
          load more
        </Button>
      </Container>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products
  };
}
export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductListing);
