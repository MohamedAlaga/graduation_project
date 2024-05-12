import x from "./assets/teenyicons_x-outline.svg";

// eslint-disable-next-line react/prop-types
function DeleteItem({ title, cancel }) {
  return (
    <div className="deleteItem">
      <div className="deleteItem__window">
        <div className="deleteItem__window__header">
          <div>حذف {title}</div>
          <button onClick={cancel}>
            <img src={x} alt="Close" />
          </button>
        </div>
        <div className="deleteItem__window__body">
          <div>هل أنت متأكد أنت تريد أن تحذف هذا {title} نهائيا ؟</div>
          <div className="btns">
            <button>حذف</button>
            <button onClick={cancel}>إلغاء</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteItem;
