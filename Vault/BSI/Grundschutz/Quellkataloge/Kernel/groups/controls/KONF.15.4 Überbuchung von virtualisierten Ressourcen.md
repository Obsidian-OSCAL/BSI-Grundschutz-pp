---
tags: Produktbeschreibung_Hochverfügbarkeit
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.15.4 Überbuchung von virtualisierten Ressourcen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.15.4 - Überbuchung von virtualisierten Ressourcen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Hochverfügbarkeit](tags_Hochverfügbarkeit)"
Gruppe: [KONF.15 Ressourcenauslastung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.15%20Ressourcenauslastung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Ressourcenauslastung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.15%20Ressourcenauslastung.md) *** | Virtualisierungslösungen | KANN | die Überbuchung von virtualisierten Ressourcen |  | deaktivieren | Konfigurationshistorie | >Konfiguration für Virtualisierungslösungen KANN die Überbuchung von virtualisierten Ressourcen deaktivieren.

> [!info]- Guidance
>Die Überbuchung (engl. overcommitment) beschreibt in Virtualisierungslösungen die Zuweisung von mehr virtuellen Ressourcen – etwa CPU-Kernen, Arbeitsspeicher oder Speicherplatz – an virtuelle Instanzen, als physisch tatsächlich vorhanden sind. Dies kann kurzfristig zu einer höheren Auslastung und Dichte von virtuellen Instanzen führen, birgt jedoch das Risiko, dass die zugrunde liegende Hardware unter Last nicht mehr alle angefragten Ressourcen bereitstellen kann. Der Zweck der Anforderung liegt darin, die Stabilität, Verfügbarkeit und Vorhersehbarkeit der virtualisierten Umgebung sicherzustellen. Ohne diese Begrenzung könnte es unter hoher Auslastung zu Leistungseinbrüchen, Systemabstürzen oder inkonsistenten Speicherzuständen kommen, während eine restriktive Konfiguration die Zuverlässigkeit und die Berechenbarkeit der Performance einer virtuellen Infrastruktur deutlich verbessern kann. Eine Institution kann die Umsetzung dieser Vorgabe durch verschiedene Maßnahmen erreichen: (1) In der Hypervisor-Konfiguration kann die Vergabe virtueller CPUs und Arbeitsspeicher exakt auf die physisch vorhandenen Ressourcen begrenzt werden. (2) Es kann sinnvoll sein, Profile oder Templates für virtuelle Maschinen zu nutzen, die konservative Standardwerte vorgeben, sodass die Gefahr unbeabsichtigter Überbuchung reduziert wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6cf041a5-163d-4faa-b817-42b35ad681c2 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 6cf041a5-163d-4faa-b817-42b35ad681c2 |
