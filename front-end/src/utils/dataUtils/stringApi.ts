import DOMPurify from "dompurify";

export namespace StringApis {
    export function RemoveHtmlTags(str: string) {
        const regex = /(<([^>]+)>)/gi;

        return DOMPurify.sanitize(str)
            .replace(regex, "")
            .replace(/&nbsp;/g, '"')
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '"');
    }
}
