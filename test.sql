CREATE TABLE Tendedo (
  ID INT PRIMARY KEY,
  Nombre VARCHAR(50),
  Apellido VARCHAR(50),
  VendedorID INT
);

CREATE TABLE MarcaAuto (
  ID INT PRIMARY KEY,
  Nombre VARCHAR(50)
);

CREATE TABLE ModeloAuto (
  ID INT PRIMARY KEY,
  Nombre VARCHAR(50),
  MarcaID INT
);

CREATE TABLE Solicitudeu (
  ID INT PRIMARY KEY,
  Fecha DATE,
  MarcaAutoID INT,
  ModeloAutoID INT,
  TendedoID INT
);

INSERT INTO Tendedo (ID, Nombre, Apellido, VendedorID) VALUES
  (1, 'Juan', 'Pérez', 100),
  (2, 'María', 'Gómez', 101),
  (3, 'Carlos', 'López', 102);

INSERT INTO MarcaAuto (ID, Nombre) VALUES
  (1, 'Toyota'),
  (2, 'Ford'),
  (3, 'Chevrolet');

INSERT INTO ModeloAuto (ID, Nombre, MarcaID) VALUES
  (1, 'Corolla', 1),
  (2, 'Mustang', 2),
  (3, 'Camaro', 3);

INSERT INTO Solicitudeu (ID, Fecha, MarcaAutoID, ModeloAutoID, TendedoID) VALUES
  (1, '2023-07-01', 1, 1, 1),
  (2, '2023-07-02', 2, 2, 2),
  (3, '2023-07-03', 3, 3, 3),
  (4, '2023-06-15', 1, 1, 2),
  (5, '2023-06-20', 2, 2, 1);


  CREATE PROCEDURE ObtenerMarcasSolicitadas
AS
BEGIN
  SELECT TOP 3 m.Nombre AS Marca, COUNT(*) AS CantidadSolicitudes
  FROM MarcaAuto m
  JOIN Solicitudeu s ON m.ID = s.MarcaAutoID
  GROUP BY m.Nombre
  ORDER BY CantidadSolicitudes DESC;
END;

CREATE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
  DECLARE @FechaActual DATE = GETDATE();

  SELECT *
  FROM Solicitudeu
  WHERE MONTH(Fecha) = MONTH(@FechaActual) AND YEAR(Fecha) = YEAR(@FechaActual);
END;


CREATE PROCEDURE ObtenerVendedorMenosSolicitudes
AS
BEGIN
  SELECT TOP 1 t.Nombre + ' ' + t.Apellido AS Vendedor, COUNT(*) AS CantidadSolicitudes
  FROM Tendedo t
  JOIN Solicitudeu s ON t.ID = s.TendedoID
  WHERE s.Fecha >= DATEADD(DAY, -30, GETDATE())
  GROUP BY t.Nombre, t.Apellido
  ORDER BY CantidadSolicitudes ASC;
END;


CREATE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
  SELECT m.Nombre AS Modelo
  FROM ModeloAuto m
  LEFT JOIN Solicitudeu s ON m.ID = s.ModeloAutoID
  WHERE s.ID IS NULL;
END;


CREATE PROCEDURE ObtenerMesesConMasVentas
AS
BEGIN
  SELECT TOP 3 
    CONCAT(MONTH(Fecha), '. ', DATENAME(MONTH, Fecha), ' ', YEAR(Fecha)) AS Mes,
    SUM(Venta) AS TotalVentas
  FROM (
    SELECT
      DATEFROMPARTS(YEAR(Fecha), MONTH(Fecha), 1) AS Fecha,
      COUNT(*) * 10000000 AS Venta
    FROM Solicitudeu
    GROUP BY YEAR(Fecha), MONTH(Fecha)
  ) AS VentasMes
  GROUP BY Fecha
  ORDER BY TotalVentas DESC;
END;
