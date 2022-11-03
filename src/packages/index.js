

import Card from "../packages/poker-3d-card/index.vue";

// 按需引入
export { Card };

const component = [Card];

const Poker3d = {
	install(App) {
		component.forEach((item) => {
			App.component(item.name, Card);
		});
	},
};

export default Poker3d;
