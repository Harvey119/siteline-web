// 예전 예비 주소 harvey119.github.io/siteline-web 용 (168절)
// 예전 앱의 서비스 워커(sw.js)가 브라우저 업데이트 확인 때 이 파일로 바뀌면: 보관본을 다 지우고, 스스로 등록을 풀고, 열린 창을 다시 연다
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) =>
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((cs) => Promise.all(cs.map((c) => c.navigate(c.url).catch(() => {})))),
  ),
);
