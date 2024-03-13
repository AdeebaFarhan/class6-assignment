;
var student = {
    fullName: "Hamza Khan",
    classId: "ABC",
    rollNumber: 25,
    email: "abc@gmail.com",
    isPassed: true,
    subjects: ["English", "Urdu", "Math"]
};
console.log(student.fullName);
console.log(student);
var arr = [{ fruit: " Apple ", Color: "red" }, { name: "Adeeba", fatherName: "Farhan" }, ["red", "blue"], [1, 2], true, "a"];
var obj = {
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
console.log(obj.key);
console.log(obj.key.key.product);
console.log(obj.key2);
console.log(arr);
console.log(arr[0], [1]);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
;
