---
tags: Produktbeschreibung_Zero_Trust
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.5 Dynamische Zugriffskontrolle im System
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.5 - Dynamische Zugriffskontrolle im System
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | IT-Systeme | KANN | dynamische Zugriffskontrolle | im System | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN dynamische Zugriffskontrolle im System aktivieren.

> [!info]- Guidance
>Eine dynamische Zugriffskontrolle (engl. Dynamic Access Control, DAC) bezeichnet ein Verfahren, bei dem Zugriffsentscheidungen nicht ausschließlich auf statischen Berechtigungen (z. B. Benutzerrollen oder ACLs) beruhen, sondern zusätzlich kontextabhängige Bedingungen wie Gerätezustand, Sensitivität der Daten, Standort, Zeitfenster oder Sicherheitsklassifikation auswerten. Dabei bleibt die Policy, also die zugrundeliegende Regelmenge zur Zugriffsbewertung, fest definiert und nachvollziehbar dokumentiert – lediglich die Entscheidung über den konkreten Zugriff erfolgt dynamisch anhand dieser Bedingungen. Ziel ist eine feinere Steuerung des Datenzugriffs auf Basis aktueller Risikosituationen, ohne dass Administratoren Berechtigungen manuell anpassen müssen. Solche Mechanismen können etwa verhindern, dass ein Benutzer sensible Daten von einem nicht verwalteten Endgerät ausliest, während er im internen Netz regulär Zugriff hätte. Da DAC komplex sein kann ist es zweckmäßig, auch auf Funktionen zur Auditierung und Protokollierung der DAC zu achten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ced10fd0-a74e-4376-8dac-f3381c6a9482 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | ced10fd0-a74e-4376-8dac-f3381c6a9482 |
