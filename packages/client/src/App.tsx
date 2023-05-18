import { Bar } from "@cool-land/components";
import { isNumber } from "@cool-land/utils";

function App() {
  console.log(isNumber(1));

  return (
    <>
      <Bar title="这是@cool-land/components组件库中渲染的组件" />
      <Bar
        title={`这是从@cool-land/utils计算的结果（isNumber(1)）：${isNumber(
          1,
        )}`}
      />
    </>
  );
}

export default App;
