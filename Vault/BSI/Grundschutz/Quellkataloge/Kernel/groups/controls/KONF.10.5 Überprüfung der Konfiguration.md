---
tags: konf105-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.10.5 Überprüfung der Konfiguration
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.10.5 - Überprüfung der Konfiguration
Gruppe: [KONF.10 Konfiguration von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.10.5.1 Automatisierte Überprüfung der Konfiguration](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.10.5.1%20Automatisierte%20Überprüfung%20der%20Konfiguration.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md) *** | Anwendungen | SOLLTE | die Übereinstimmung der tatsächlichen Konfiguration mit dem Referenzzustand | {{regelmäßig}} | überprüfen | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE die Übereinstimmung der tatsächlichen Konfiguration mit dem Referenzzustand {{ insert: param, konf.10.5-prm1 }} überprüfen.

> [!info]- Guidance
>Referenzzustand („baseline configuration“) bezeichnet hier die dokumentierte und freigegebene Konfiguration der Anwendung, also die gewünschte und autorisierte Einstellung von Parametern, Diensten und Komponenten. Die tatsächliche Konfiguration ist die aktuelle technische Umsetzung dieser Einstellungen der Anwendung selbst. Der Abgleich beider Zustände dient vor allem der Vermeidung von Configuration Drift – d.h. dass Anwendungen schleichend von der definierten Grundkonfiguration abweichen. Dies könnte auftreten, wenn Änderungen nicht zentral dokumentiert oder automatisierte Installationen nicht einheitlich umgesetzt werden. Ohne diese Kontrolle könnte es zu unbemerkten Fehlkonfigurationen kommen, die Sicherheitslücken öffnen oder Betriebsstörungen verursachen. Durch regelmäßige Vergleiche kann eine Institution sicherstellen, dass Anwendungen konsistent, vertrauenswürdig und wartbar bleiben. Die Umsetzung kann technisch etwa mit Skripten erfolgen, die automatisiert Konfigurationsparameter auslesen und vergleichen. Auch der Einsatz von „Configuration Management“- oder „Compliance Scanning“-Werkzeugen kann unterstützen, indem sie Differenzen visualisieren und Reports erzeugen. Prozessual kann es hilfreich sein, Prüfintervalle nach Kritikalitätsklassen zu staffeln (z. B. sicherheitskritische Anwendungen wöchentlich, weniger kritische vierteljährlich) und Ergebnisse in Change-Management-Prozesse zurückzuführen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7f01dfb0-75b6-4248-a852-16ebca5f1c45 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 7f01dfb0-75b6-4248-a852-16ebca5f1c45 |
