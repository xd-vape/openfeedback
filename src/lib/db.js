import { BOARDS } from "./data";

export async function getPublicBoards() {
  return BOARDS.filter((board) => board.isPublic);
}
