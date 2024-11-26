import React from "react";
import Layout from "@/src/components/common/layout";
import ProductPerMonthChart from "@/src/components/dashboard/product-per-month-chart";
import ProductPerWeekChart from "@/src/components/dashboard/product-per-week-chart";
import ProductPerYearChart from "@/src/components/dashboard/product-per-year-chart";
import ChartPiePerDay from "@/src/components/dashboard/chart-pie-per-day";
import ChartPiePerMonth from "@/src/components/dashboard/chart-pie-per-month";
import ChartPiePerWeek from "@/src/components/dashboard/chart-pie-per-week";
import ChartPiePerYear from "@/src/components/dashboard/chart-pie-per-year";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="text-2xl font-semibold mb-5">Dashboard</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-6">
        <div className="h-[250px] my-6">
          <div className="text-lg font-semibold mb-4">Hasil Timbang produk per-Hari</div>
          <ChartPiePerDay />
        </div>
        <div className="h-[250px] my-6">
          <div className="text-lg font-semibold mb-4">Hasil Timbang produk per-Minggu</div>
          <ChartPiePerWeek />
        </div>
        <div className="h-[250px] my-6">
          <div className="text-lg font-semibold mb-4">Hasil Timbang produk per-Bulan</div>
          <ChartPiePerMonth />
        </div>
        <div className="h-[250px] my-6">
          <div className="text-lg font-semibold mb-4">Hasil Timbang produk per-Tahun</div>
          <ChartPiePerYear />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
        <div className="border bg-white rounded-xl p-5">
          <div className="text-lg font-semibold mb-4">Hasil Timbang produk per-Minggu</div>
          <ProductPerWeekChart />
        </div>
        <div className="border bg-white rounded-xl p-5">
          <div className="text-lg font-semibold mb-4">Hasil Timbang produk per-Bulan</div>
          <ProductPerMonthChart />
        </div>
        <div className="border bg-white rounded-xl p-5">
          <div className="text-lg font-semibold mb-4">Hasil Timbang per-Tahun</div>
          <ProductPerYearChart />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
