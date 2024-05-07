// 파일 이름을 d.ts로 한 이유는 그냥 ts로 하면 import를 매번해서
// 사용해야하지만 d.ts로 만들면 전역에서 사용 가능
interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
