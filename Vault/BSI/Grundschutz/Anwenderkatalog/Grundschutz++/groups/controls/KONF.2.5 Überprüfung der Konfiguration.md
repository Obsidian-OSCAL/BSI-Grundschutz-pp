---
tags: konf25-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.5 Überprüfung der Konfiguration
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.5 - Überprüfung der Konfiguration
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.2.5.1 Automatische Konfigurationsverwaltung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.2.5.1%20Automatische%20Konfigurationsverwaltung.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | SOLLTE | die Übereinstimmung der tatsächlichen Konfiguration mit dem Referenzzustand | {{regelmäßig}} | überprüfen | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE die Übereinstimmung der tatsächlichen Konfiguration mit dem Referenzzustand {{ insert: param, konf.2.5-prm1 }} überprüfen.

> [!info]- Guidance
>Referenzzustand („baseline configuration“) bezeichnet hier die dokumentierte und freigegebene Konfiguration eines IT-Systems, also die gewünschte und autorisierte Einstellung von Parametern, Diensten und Komponenten. Die tatsächliche Konfiguration ist die aktuelle technische Umsetzung dieser Einstellungen auf dem System selbst. Der Abgleich beider Zustände dient vor allem der Vermeidung von Configuration Drift – d.h. dass Systeme schleichend von der definierten Soll-Konfiguration abweichen. Dies könnte auftreten, wenn Änderungen nicht zentral dokumentiert oder automatisierte Installationen nicht einheitlich umgesetzt werden. Ohne diese Kontrolle könnte es zu unbemerkten Fehlkonfigurationen kommen, die Sicherheitslücken öffnen oder Betriebsstörungen verursachen. Durch regelmäßige Vergleiche kann eine Institution sicherstellen, dass Systeme konsistent, vertrauenswürdig und wartbar bleiben. Eine praktische Umsetzung kann auf verschiedenen Ebenen erfolgen. Technisch kann eine Institution (1) Konfigurations-Management-Werkzeuge einsetzen, die Referenzzustand-Definitionen mit Systemzuständen automatisch abgleichen, (2) Skripte oder Policies nutzen, die regelmäßig Konfigurationsdateien oder Systemeinstellungen auslesen und protokollieren, oder (3) Hash- oder Signaturverfahren anwenden, um Veränderungen an Konfigurationsdateien nachzuweisen. Prozessual kann es hilfreich sein, Änderungen zentral zu dokumentieren und automatische Reports über Abweichungen an Verantwortliche weiterzuleiten, damit diese reagieren können. Zusätzlich kann eine Institution Pilotprüfungen an Stichproben-Systemen durchführen, um die Wirksamkeit automatischer Abgleiche zu validieren. Durch diese Maßnahmen kann eine Institution eine belastbare Routine etablieren, die Configuration Drift reduziert und nicht nur technische Abweichungen sichtbar macht, sondern auch menschliche Fehler oder unautorisierte Eingriffe frühzeitig erkennen kann.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | a37d5c17-d296-4810-ac13-4a15e7b40e97 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | a37d5c17-d296-4810-ac13-4a15e7b40e97 |

> [!info]- Links> > required: [KONF.2.1 Grundkonfiguration für Systeme](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.2.1%20Grundkonfiguration%20für%20Systeme.md)
