---
tags:
- Produktbeschreibung
- konf612-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.1.2 Isolierung von Anwendungen
parent_control: KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.1.2 - Isolierung von Anwendungen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

** Übergeordnetes Control: ** [KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.6.1%20Minimal%20erforderliche%20Berechtigungen%20für%20Anwendungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *** | IT-Systeme | KANN | die Isolierung | von {{bestimmten Anwendungen}} | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN die Isolierung von {{ insert: param, konf.6.1.2-prm1 }} aktivieren.

> [!info]- Guidance
>Die Isolation von Anwendungen (auch Kapselung oder Application Sandboxing genannt) dient dazu, die Angriffsfläche eines Systems zu reduzieren und die Vertraulichkeit, Integrität sowie Verfügbarkeit kritischer Komponenten besser zu schützen. Durch eine klare Trennung der Anwendungs- und Systemprozesse und von deren Ressourcenzugriffen (Netzwerk, Datei‑ oder Geräte‑I/O) kann eine kompromittierte Applikation nicht unbegrenzt auf weitere Systemressourcen zugreifen, sondern ist auf genau definierte Schnittstellen beschränkt. Bestimmte Anwendungen meint hier, dass konkret festgelegt wird, welche Anwendungen konkret isoliert ausgeführt werden. Dies ermöglicht es, Fehlfunktionen oder Angriffe einzudämmen, Schadsoftware leichter zu erkennen und Verantwortlichkeiten einzelner Module transparent zu halten. Dies kann z.B. durch Containerisierung oder eine Microservice-Architektur, in der jede Komponente nur über REST- oder Message-Queue-Schnittstellen kommuniziert umgesetzt werden. Auch klassische Virtualisierung (Gastsysteme mit Hypervisor) oder Betriebssystemfunktionen wie SELinux/AppArmor‑Profile und chroot‑Jails zählen dazu, weil sie Applikationen auf genau festgelegte Ressourcen beschränken. Im Kontext der Containerisierung empfiehlt es sich ebenfalls eine feste Zuordnung von Containern zu Container-Hosts vorzunehmen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d380c6d8-1ab0-4e4b-bcca-2e620b40d934 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | d380c6d8-1ab0-4e4b-bcca-2e620b40d934 |
