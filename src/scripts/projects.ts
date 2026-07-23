export const initProjects = () => {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-project-filter]');
  const cards = document.querySelectorAll<HTMLElement>('[data-project-card]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.projectFilter ?? 'all';
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      cards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-project-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(button.dataset.projectOpen ?? '') as HTMLDialogElement | null;
      dialog?.showModal();
    });
  });
  document.querySelectorAll<HTMLDialogElement>('[data-project-dialog]').forEach((dialog) => {
    dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      const rect = dialog.getBoundingClientRect();
      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
      if (outside) dialog.close();
    });
  });
};
