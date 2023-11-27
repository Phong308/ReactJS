import React, { useState } from 'react';

const ZooManagement = () => {
  // Sử dụng Set để lưu trữ danh sách động vật
  const [animalSet, setAnimalSet] = useState(new Set());

  // Thêm một loài động vật mới vào danh sách
  const addAnimal = (animal) => {
    setAnimalSet(new Set(animalSet).add(animal));
  };

  // Kiểm tra xem loài động vật đã có trong danh sách chưa
  const isAnimalInList = (animal) => {
    return animalSet.has(animal);
  };

  // Xóa một loài động vật khỏi danh sách
  const removeAnimal = (animal) => {
    const updatedAnimalSet = new Set(animalSet);
    updatedAnimalSet.delete(animal);
    setAnimalSet(updatedAnimalSet);
  };

  // In ra danh sách động vật
  const printAnimalList = () => {
    console.log('Danh sách động vật trong sở thú:');
    animalSet.forEach((animal) => {
      console.log(animal);
    });
  };

  // Gọi các hàm để kiểm tra chương trình
  addAnimal('Lion');
  addAnimal('Elephant');
  addAnimal('Giraffe');

  console.log('Is Tiger in the list?', isAnimalInList('Tiger')); // false
  console.log('Is Elephant in the list?', isAnimalInList('Elephant')); // true

  printAnimalList();

  // Xóa Elephant khỏi danh sách và in lại danh sách
  removeAnimal('Elephant');
  printAnimalList();

  return (
    <div>
      <h1>Zoo Management</h1>
      {/* Hiển thị nội dung giao diện tại đây nếu cần */}
    </div>
  );
};

export default ZooManagement;
