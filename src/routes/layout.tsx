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
       
      </footer>
    </>
  );
});
