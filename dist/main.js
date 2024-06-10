"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./utils/config");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    if (process.env.NODE_ENV !== 'production')
        (0, dotenv_1.config)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen((0, config_1.getConfig)('PORT') || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map