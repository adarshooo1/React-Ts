// Book Component, Re-usable
export const Book = ({
  id,
  image,
  title,
  author,
  price,
  getBookDetail,
  BookNumber,
}) => {
  return (
    <div className="BookContainer">
      <span
        style={{
          backgroundColor: "orangered",
          position: "absolute",
          height: "24px",
          width: "24px",
          borderTopLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {BookNumber + 1}
      </span>
      <button
        className="delete"
        style={{
          position: "absolute",
          backgroundColor: "black",
          height: "25px",
          width: "25px",
          borderRadius: "15px",
          right: "10px",
          border: "none",
          outline: "none",
        }}
        onClick={() => {
          getBookDetail(id);
        }}
      >
        ❕
      </button>
      <div className="ImageHolder">
        <img className="BookImage" src={image} alt={title} />
      </div>
      <div className="InfoHolder">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <div className="PurchaseArea">
          <h3 style={{ color: "red" }}>{price}</h3>
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#454545",
              height: "20px",
              width: "50px",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={() => {
              alert(`Purchase Successful of ${title}`);
            }}
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};
