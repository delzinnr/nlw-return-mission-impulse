"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// GET, POST, PUT, PATCH, DELETE
// GET = BUSCAR INFORMAÇÕES
// POST = CADASTRAR INFORMAÇÕES
// PUT = ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DE UMA ENTIDADE
// DELETE = DELETAR INFORMAÇÃO
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3333, () => {
    console.log('HTTP server running!');
});
