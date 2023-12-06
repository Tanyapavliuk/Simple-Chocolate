!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modalElem = document.querySelector(
        '.modal[data-modal="' + modalId + '"]'
      );
      switch (modalId) {
        case '2':
          const activeModal = document.querySelector('.active');
          activeModal.classList.remove('active');
          modalElem.classList.add('active');
          break;
        case '3':
          const activModal = document.querySelector('.active');
          activModal.classList.remove('active');
          modalElem.classList.add('active');
          break;
        default:
          modalElem.classList.add('active');
          overlay.classList.add('active');
          break;
      }
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        const activeArray = document.querySelectorAll('.modal.active');
        activeArray.forEach(el => el.classList.remove('active'));
        document.querySelector('.overlay').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    const activeArray = document.querySelectorAll('.modal.active');
    activeArray.forEach(el => el.classList.remove('active'));
    this.classList.remove('active');
  });
});
