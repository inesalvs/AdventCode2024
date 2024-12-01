import { readFile } from 'fs';

const filePath = 'input.txt'; // Replace with your file path

readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const list1 = [];
    const list2 = [];

    const lines = data.split('\n');
    const parsedData = lines.map(line => {
        const [id1, id2] = line.trim().split(/\s+/).map(Number);
        list1.push(id1);
        list2.push(id2);
        return { id1, id2 };
    });

    list1.sort();
    list2.sort();

  
    let totalDist=0;

    for (let i = 0; i < list1.length; i++) {
        totalDist+=Math.abs(list2[i]-list1[i]);
        console.log("The difference between list1["+i+"]  and list2["+i+"] is:",list1[i],list2[i],list2[i]-list1[i]);
    }
    
    console.log("The total distance is:",totalDist);
});
