using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace esercizioBackend.Migrations
{
    public partial class _2020612 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Activities",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titolo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    descrizione = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    utenteAssegnato = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    stato = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    totaleOre = table.Column<int>(type: "int", nullable: false),
                    oreLavorate = table.Column<int>(type: "int", nullable: false),
                    commento = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activities");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
