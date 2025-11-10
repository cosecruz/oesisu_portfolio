import React from "react";
import { Mail, Phone, MapPin, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  iconColor: string;
}

interface ContactInfoCardProps {
  email: string;
  phone: string;
  location: string;
}

export default function ContactInfoCard({ email, phone, location }: ContactInfoCardProps) {
  const contactItems: ContactInfoItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      iconColor: "bg-blue-400/10 border-blue-400/20 text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      iconColor: "bg-green-400/10 border-green-400/20 text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      iconColor: "bg-violet-400/10 border-violet-400/20 text-violet-400"
    }
  ];

  return (
    <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-bold text-white/95">Contact Information</h2>

        {contactItems.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${item.iconColor} border`}>
              <item.icon className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white/50 mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white/90 hover:text-blue-400 transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white/90 text-sm">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
