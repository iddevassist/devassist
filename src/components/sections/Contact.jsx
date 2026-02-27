"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Pesan berhasil dikirim!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message || "Gagal mengirim pesan.");
      }
    } catch (error) {
      alert("Terjadi kesalahan server.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-light">
      <Container>
        <SectionTitle
          subtitle="Hubungi Kami"
          title="Diskusikan Kebutuhan Anda"
        />
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nama</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-primary focus:border-primary"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-primary focus:border-primary"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                No. HP (opsional)
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border rounded-lg focus:ring-primary focus:border-primary"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Pesan</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-primary focus:border-primary"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}