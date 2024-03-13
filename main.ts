interface student {
    fullName: string;
    classId: string;
    rollNumber: number;
    isPassed: boolean;
    email: string;
    subjects: string[]

};

const student: student = {
    fullName: "Hamza Khan",
    classId: "ABC",
    rollNumber: 25,
    email: "abc@gmail.com",
    isPassed: true,
    subjects: ["English", "Urdu", "Math"]
};
console.log(student.fullName);
console.log(student);
///Making interface Array of Object:
interface Fruit {
    fruit: string;
    color: string;
}

interface Person {
    name: string;
    fatherName: string;
}

interface Obj {
    fullName: string;
    rollnumber: string;
    key1: {
        brand: string;
        article: string;
        size: string;
        key: {
            product: string;
            prize: number;
            shade: string;
        };
    };
    key2: string[];
}




let arr = [{ fruit: " Apple ", Color: "red" }, { name: "Adeeba", fatherName: "Farhan" }, ["red", "blue"], [1, 2], true, "a"]
let obj = {
    fullName: "Ayyan",
    rollnumber: "123",
    key: {
        brand: "Khaddi",
        article: "Kurti",
        size: "small",
        key: {
            product: "makeup",
            prize: 125,
            shade: "red",
        }
    },
    key2: ["lipstick", "mascara", "crayoun"]
};
console.log(arr, obj);
console.log(obj.fullName);
console.log(obj.key)
console.log(obj.key.key.product);
console.log(obj.key2)
console.log(arr)
console.log(arr[0], [1])

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};




