import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Menu,
  Bell,
  Search
} from 'lucide-react';

export function Dashboard() {
  const statsData = [
    { name: 'Ene', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Abr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
  ];

  const recentActivity = [
    { id: 1, user: 'Juan Pérez', action: 'Nuevo registro', date: '2023-12-03' },
    { id: 2, user: 'María García', action: 'Compra realizada', date: '2023-12-03' },
    { id: 3, user: 'Carlos López', action: 'Actualización de perfil', date: '2023-12-02' },
    { id: 4, user: 'Ana Martínez', action: 'Nuevo comentario', date: '2023-12-02' },
  ];

  return (
    <section className="py-24 px-6 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center">Dashboard Demo</h2>
          <p className="text-center text-[var(--color-muted-foreground)] mb-12 max-w-2xl mx-auto">
            Ejemplo de panel administrativo con capacidades Full-Stack
          </p>

          {/* Dashboard Container */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-[var(--color-muted)] rounded-lg transition-colors">
                  <Menu size={20} />
                </button>
                <h3>Panel de Control</h3>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-[var(--color-muted)] rounded-lg transition-colors">
                  <Search size={20} />
                </button>
                <button className="p-2 hover:bg-[var(--color-muted)] rounded-lg transition-colors">
                  <Bell size={20} />
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Users, label: 'Total Usuarios', value: '12,345', change: '+12%' },
                  { icon: ShoppingCart, label: 'Ventas', value: '8,234', change: '+8%' },
                  { icon: DollarSign, label: 'Ingresos', value: '$45,678', change: '+23%' },
                  { icon: TrendingUp, label: 'Crecimiento', value: '34%', change: '+5%' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <stat.icon size={24} strokeWidth={1.5} className="text-[var(--color-muted-foreground)]" />
                      <span className="text-sm text-green-600">{stat.change}</span>
                    </div>
                    <div className="text-2xl mb-1">{stat.value}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Line Chart */}
                <div className="p-6 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl">
                  <h4 className="mb-6">Tendencia Mensual</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={statsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--color-card)', 
                          border: '1px solid var(--color-border)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line type="monotone" dataKey="value" stroke="var(--color-foreground)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="p-6 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl">
                  <h4 className="mb-6">Comparativa Mensual</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={statsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                      <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
                      <YAxis stroke="var(--color-muted-foreground)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--color-card)', 
                          border: '1px solid var(--color-border)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="value" fill="var(--color-foreground)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Activity Table */}
              <div className="p-6 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl">
                <h4 className="mb-6">Actividad Reciente</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[var(--color-border)]">
                        <th className="text-left py-3 px-4 text-sm text-[var(--color-muted-foreground)]">Usuario</th>
                        <th className="text-left py-3 px-4 text-sm text-[var(--color-muted-foreground)]">Acción</th>
                        <th className="text-left py-3 px-4 text-sm text-[var(--color-muted-foreground)]">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivity.map((activity) => (
                        <tr key={activity.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-muted)] transition-colors">
                          <td className="py-3 px-4">{activity.user}</td>
                          <td className="py-3 px-4 text-[var(--color-muted-foreground)]">{activity.action}</td>
                          <td className="py-3 px-4 text-sm text-[var(--color-muted-foreground)]">{activity.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
