---
tags:
- produktbeschreibung_hochverfügbarkeit
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.15.4 Überbuchung von virtualisierten Ressourcen
stmt_target_object_category: Virtualisierungslösungen
stmt_modal_verb: KANN
stmt_action_word: deaktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.15.4 - Überbuchung von virtualisierten Ressourcen
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Hochverfügbarkeit|Hochverfügbarkeit]]
Gruppe: [KONF.15 Ressourcenauslastung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.15%20Ressourcenauslastung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Ressourcenauslastung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.15%20Ressourcenauslastung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Virtualisierungslösungen](target_object_categories_Virtualisierungslösungen_38167a3c-ee3e-4261-9c44-994c15a31d2c) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Überbuchung von virtualisierten Ressourcen |  | [deaktivieren](action_words_deaktivieren_5f0f5c35-65a5-4db2-9b27-0d86c2d7089b) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Virtualisierungslösungen KANN die Überbuchung von virtualisierten Ressourcen deaktivieren.</span>

> [!info]- Guidance
>Die Überbuchung (engl. overcommitment) beschreibt in Virtualisierungslösungen die Zuweisung von mehr virtuellen Ressourcen – etwa CPU-Kernen, Arbeitsspeicher oder Speicherplatz – an virtuelle Instanzen, als physisch tatsächlich vorhanden sind. Dies kann kurzfristig zu einer höheren Auslastung und Dichte von virtuellen Instanzen führen, birgt jedoch das Risiko, dass die zugrunde liegende Hardware unter Last nicht mehr alle angefragten Ressourcen bereitstellen kann. Der Zweck der Anforderung liegt darin, die Stabilität, Verfügbarkeit und Vorhersehbarkeit der virtualisierten Umgebung sicherzustellen. Ohne diese Begrenzung könnte es unter hoher Auslastung zu Leistungseinbrüchen, Systemabstürzen oder inkonsistenten Speicherzuständen kommen, während eine restriktive Konfiguration die Zuverlässigkeit und die Berechenbarkeit der Performance einer virtuellen Infrastruktur deutlich verbessern kann. Eine Institution kann die Umsetzung dieser Vorgabe durch verschiedene Maßnahmen erreichen: (1) In der Hypervisor-Konfiguration kann die Vergabe virtueller CPUs und Arbeitsspeicher exakt auf die physisch vorhandenen Ressourcen begrenzt werden. (2) Es kann sinnvoll sein, Profile oder Templates für virtuelle Maschinen zu nutzen, die konservative Standardwerte vorgeben, sodass die Gefahr unbeabsichtigter Überbuchung reduziert wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6cf041a5-163d-4faa-b817-42b35ad681c2 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 6cf041a5-163d-4faa-b817-42b35ad681c2 |
