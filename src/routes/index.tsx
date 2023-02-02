import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
    </div>
  );
});

export const head: DocumentHead = {
  title: '编程知识分享',
  meta: [
    {
      name: 'description',
      content: 'wmvm site description',
    },
  ],
};
