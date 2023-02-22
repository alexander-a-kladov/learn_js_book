'use strict'

function ask(question, yes, no) {
  if (question) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);

ask(
    "",
    () => { console.log("Вы согласились."); },
    () => { console.log("Вы отменили выполнение."); }
  );
