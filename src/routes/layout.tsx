import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <Slot />
        <sestionscontent>
          <ol>
            <li>I don't avoid everything. <a href="mailto:wmvm.org@gmail.com">Contact.</a></li>
          </ol>
          <ol>
            <li>Stuff I've done.</li>
            <li><a href=".">todo</a></li>
          </ol>
        </sestionscontent>
      </main>
      <footer>
        <div>Copyright 2022-2023 wmvm TEST <a class="beian" href="https://beian.miit.gov.cn">京ICP备2022004058号-1</a></div>
      </footer>
    </>
  );
});
