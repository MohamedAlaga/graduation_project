import Question from "./Question";
import { useForm } from "react-hook-form";
import { CreateTest } from "./services/CreateTest";
import { useAuth } from "../../AuthContext";


function AddTest() {
  const { token } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const onSub = async (values) => {
    await CreateTest(token, values);
    reset();
  };

  return (
    <div className="AddATest">
      <form onSubmit={handleSubmit(onSub)}>
        <div style={{ marginBottom: "100px" }}>
          <label htmlFor="title">عنوان الإختبار </label>
          <input
            type="text"
            id="title"
            placeholder="أضف عنوان الاختبار"
            {...register("title")}
          />
        </div>
        {Array.from({ length: 20 }).map((_, index) => (
          <Question key={index} num={index + 1} register={register} />
        ))}
        <div className="btns">
          <button type="cancel" onClick={() => reset()}>
            إلغاء
          </button>
          <button type="submit">إضافة</button>
        </div>
      </form>
    </div>
  );
}

export default AddTest;
