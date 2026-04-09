---
tags: Produktbeschreibung_Data_Leak
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.10 Auflistung von Verzeichnisinhalten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.10 - Auflistung von Verzeichnisinhalten
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Data Leak](tags_Data Leak)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | Webserver | SOLLTE | die Auflistung von Verzeichnisinhalten |  | einschränken | Konfigurationshistorie | >Konfiguration für Webserver SOLLTE die Auflistung von Verzeichnisinhalten einschränken.

> [!info]- Guidance
>Über das Auflisten von Verzeichnisinhalten erhalten Angreifer Einblick in die interne Struktur des Systems und potenziell sensibler Daten. Zur Umsetzung kann in der Konfiguration des Webservers (z.B. Apache, Nginx) die Directory-Listing-Funktion deaktiviert werden. Alternativ kann über Dateien wie .htaccess der Zugriff auf die notwendigen Verzeichnisse eingeschränkt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ce8d6ad1-d414-48a3-b273-50fa01fd2ee6 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | ce8d6ad1-d414-48a3-b273-50fa01fd2ee6 |
