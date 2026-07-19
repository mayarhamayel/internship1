import useUsers from "./hooks/useUsers";
import { Table, Alert, Input, Button } from "antd";

import UserContext from "./context/UserContext";

import { useContext, useState, useMemo, useCallback } from "react";
import { Card } from "antd";


function Users() {
    const { users, loading, error } = useUsers();
    const user = useContext(UserContext);
    const [search, setSearch] = useState("");

    const filteredUsers = useMemo(() => {
      return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );
    }, [users, search]);

    const clearSearch = useCallback(() => {
      setSearch("");
    }, []);

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
    ];
    return (
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-2">Welcome, {user.name}</h2>

        <p className="text-gray-600 mb-6">Role: {user.role}</p>

        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button onClick={clearSearch}>Clear Search</Button>
        </div>

        <Card>
          <Table
            columns={columns}
            dataSource={filteredUsers}
            rowKey="id"
            loading={loading}
          />
        </Card>

        {error && <Alert message={error} type="error" />}
      </div>
    );
}
export default Users;