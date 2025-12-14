import { loadImage } from "./loadImage";

async function createMasonry(urls, columnCount = 3, columnWidth=350){
    const columns = Array.from({length: columnCount}, () => ({
        height: 0,
        items: []
    }));

    for(const url of urls){
        const { width, height, aspectRatio } = await loadImage(url);
        console.log('url', url, 'width', width, 'height', height, 'aspectRatio', aspectRatio);
        const scaledHeight = columnWidth/aspectRatio;

        const shortest = columns.reduce((a, b) => a.height < b.height ? a: b);

        shortest.items.push({url, height: scaledHeight});
        shortest.height+= scaledHeight;
    }

    return columns;
}

export {createMasonry}