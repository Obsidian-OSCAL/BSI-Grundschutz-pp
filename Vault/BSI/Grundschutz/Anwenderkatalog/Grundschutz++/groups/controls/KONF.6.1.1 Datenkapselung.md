---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.1.1 Datenkapselung
parent_control: KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.1.1 - Datenkapselung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

** Übergeordnetes Control: ** [KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.6.1%20Minimal%20erforderliche%20Berechtigungen%20für%20Anwendungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | IT-Systeme | KANN | Datenkapselung |  | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN Datenkapselung aktivieren.

> [!info]- Guidance
>Bei der Datenkapselung, im Englischen als data encapsulation bekannt, handelt es sich um einen Schutzmechanismus, bei dem Daten logisch vor dem Zugriff des restlichen Systems verborgen werden. Hierdurch wird der direkte Zugriff unterbunden und ausschließlich über definierte, sichere Schnittstellen bereitgestellt. Zweck ist es, die Angriffsfläche auf sensible Daten zu verringern und deren Integrität sowie Vertraulichkeit zu wahren. Ohne eine solche Kapselung könnte beispielsweise eine Schadsoftware auf einem Server direkt auf Konfigurationsdateien oder im Arbeitsspeicher gehaltene Anmeldeinformationen anderer Anwendungen zugreifen und diese manipulieren oder ausleiten. Durch eine wirksame Datenkapselung kann die Institution sicherstellen, dass Zugriffe nur über vorab genehmigte und protokollierte Wege erfolgen, was eine unautorisierte Modifikation oder einen unbemerkten Abfluss von Daten erschwert. Technisch erfolgt dies zum Beispiel durch einen abgeschlossenen Speicherbereich auf einem mobilen Gerät für persönliche Informationen wie Kontakte oder Kalender (PIM-Container). Die Kapselung erfordert eine separate Authentisierung vor dem Zugriff auf die gekapstelten Daten und eine vom Betriebssystem unabhängige Daten- & Transportverschlüsselung innerhalb der Kapselung.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6bb18861-0616-4cde-afed-7929b71ba16c |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 6bb18861-0616-4cde-afed-7929b71ba16c |
