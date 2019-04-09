/*
★★☆☆☆
Дано объект. Написать функцию (Transform) которая создаст объект с другой структурой

let source = {
  ua: {
    buttons: {
      btn_open: "Відкрити",
      btn_close: "Закрити",
      btn_cancel: "Відміна",
    },
    texts: {
      txt_ok: "Готово",
      txt_not: "Не готово"
    }
  },
  ru: {
    buttons: {
      btn_open: "Открыть",
      btn_close: "Закрыть",
      btn_cancel: "Отмена",
    },
    texts: {
      txt_ok: "Ок",
      txt_not: "Не ок"
    }
  }
}
console.log(Transform(source));

Результатом выполнения должно быть:
{
  btn_open: {
    ua: 'Відкрити',
    ru: 'Открыть'
  },
  btn_close: {
    ua: 'Закрити',
    ru: 'Закрыть'
  },
  btn_cancel: {
    ua: 'Відміна',
    ru: 'Отмена'
  },
  txt_ok: {
    ua: 'Готово',
    ru: 'Ок'
  },
  txt_not: {
    ua: 'Не готово',
    ru: 'Не ок'
  }
}
 */
