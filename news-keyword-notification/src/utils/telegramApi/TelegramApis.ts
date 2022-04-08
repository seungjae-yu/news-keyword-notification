import axios from "axios";
import { TelegramInfo } from "../../@types/telegram-info";

export namespace TelegramApi {

    export async function sendMessage(message: string, telegramInfo: TelegramInfo) {
        const sendURL = `https://api.telegram.org/bot${telegramInfo.token}/sendMessage?chat_id=${telegramInfo.chatId}&text=${message}`;
        await axios.get(sendURL);
    }
}