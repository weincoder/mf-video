import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@weincode/mf-header",
  app: () => System.import("@weincode/mf-header"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@weincode/mf-footer",
  app: () => System.import("@weincode/mf-footer"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@weincode/mf-react",
  app: () => System.import("@weincode/mf-react"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@weincode/mf-set-id",
  app: () => System.import("@weincode/mf-set-id"),
  activeWhen: ["/mf-main"],
});
registerApplication({
  name: "@weincode/mf-main",
  app: () => System.import("@weincode/mf-main"),
  activeWhen: ["/mf-main"],
});
registerApplication({
  name: "@weincode/mf-images",
  app: () => System.import("@weincode/mf-images"),
  activeWhen: ["/mf-images"],
});
registerApplication({
  name: "@weincode/mf-cats",
  app: () => System.import("@weincode/mf-cats"),
  activeWhen: ["/mf-cats"],
});
registerApplication({
  name: "@weincode/mf-react-prueba",
  app: () => System.import("@weincode/mf-react-prueba"),
  activeWhen: ["/prueba"],
});

start({
  urlRerouteOnly: true,
});
