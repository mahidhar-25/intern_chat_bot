import { createApp } from "vue";
import App from "./App.vue";
import NameLogo from "./components/UI/NameLogo.vue";

const app = createApp(App);
app.component("name-logo", NameLogo);

app.mount("#app");
