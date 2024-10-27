// script.js
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const suggestions = document.getElementById('suggestions');

// Mảng các từ khóa gợi ý (ví dụ)
const suggestionsList = ['iphone', 'samsung', 'laptop', 'máy tính', 'điện thoại'];

// Hàm hiển thị gợi ý
function showSuggestions(value) {
  suggestions.innerHTML = '';
  const filteredSuggestions = suggestionsList.filter(suggestion => suggestion.startsWith(value));
  filteredSuggestions.forEach(suggestion => {
    const suggestionElement = document.createElement('div');
    suggestionElement.textContent = suggestion;
    suggestions.appendChild(suggestionElement);
  });
}

// Sự kiện khi người dùng nhập vào ô tìm kiếm
searchInput.addEventListener('input', () => {
  showSuggestions(searchInput.value);
});

// Sự kiện khi người dùng click vào nút tìm kiếm
searchButton.addEventListener('click', () => {
  // Thực hiện tìm kiếm dựa trên giá trị trong searchInput
  const searchTerm = searchInput.value;
  // Gọi hàm tìm kiếm và hiển thị kết quả
  search(searchTerm);
});

// Hàm tìm kiếm (bạn cần tự triển khai)
function search(searchTerm) {
  // Code để thực hiện tìm kiếm, có thể sử dụng AJAX để gọi API hoặc tìm kiếm trong cơ sở dữ liệu
  console.log('Bạn đã tìm kiếm: ' + searchTerm);
}