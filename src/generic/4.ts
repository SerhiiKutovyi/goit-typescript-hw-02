/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProps {
  title:string;
}
 

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentProps>  {
  pageInfo() {
    console.log(this.props.title);
  }
}

const myPage = new Page({ title: "New Page" });
myPage.pageInfo();

export {};