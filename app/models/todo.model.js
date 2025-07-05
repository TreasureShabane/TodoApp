function TodoItem(data) {
    data = data || {};
    this.id = data.id || null;
    this.text = data.text || '';
    this.completed = data.completed || false;
}