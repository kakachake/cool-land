import { Bar } from "@cool-land/components";
import { isNumber } from "@cool-land/utils";
import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/basic";

export default function Home() {
  const counter = useAppSelector((state) => state.basic.value);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <h2>
        欢迎来到<span>cool-land</span>
      </h2>
      <Bar title="这是@cool-land/components组件库中渲染的组件" />
      <Bar
        title={`这是从@cool-land/utils计算的结果（isNumber(1)）：${isNumber(
          1,
        )}`}
      />
      <div>
        <button onClick={() => dispatch(increment())}>count+</button>
        <button onClick={() => dispatch(decrement())}>count-</button>
        <span>{counter}</span>
      </div>
    </div>
  );
}
